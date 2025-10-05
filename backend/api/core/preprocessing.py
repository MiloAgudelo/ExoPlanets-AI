import pandas as pd
import numpy as np
import tempfile
import os
from pathlib import Path
import sys

# Import functions from ml-pipeline
ML_PIPELINE_PATH = Path(__file__).parent.parent.parent.parent / "ml-pipeline"
sys.path.insert(0, str(ML_PIPELINE_PATH / "src"))

from preprocessing import (
    detect_table_start,
    parse_table_from,
    to_numeric_columns,
    impute_median
)
from feature_engineering import basic_feature_engineering

async def process_csv_file(file_content: bytes) -> pd.DataFrame:
    """Process an uploaded CSV file"""
    
    # Create cross-platform temporary file
    with tempfile.NamedTemporaryFile(mode='wb', delete=False, suffix='.csv') as tmp:
        tmp.write(file_content)
        temp_path = tmp.name
    
    try:
        # Detect table start
        start_idx = detect_table_start(temp_path)
        
        if start_idx is not None:
            df_pd, df_raw = parse_table_from(temp_path, start_idx)
            df = to_numeric_columns(df_pd)
        else:
            df = pd.read_csv(temp_path)
        
        # Preprocessing
        df = impute_median(df)
        df = basic_feature_engineering(df)
        
        return df
        
    finally:
        # Clean up temporary file
        if os.path.exists(temp_path):
            os.unlink(temp_path)

