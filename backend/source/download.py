import openpyxl

import os
import sys
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from utils.u2c_tool_box import Up2Cloud as U2C


if __name__ == "__main__":  
    # 云盘路径
    base_path = "H:/Zipped_NFT_projs"
    # 云盘路径
    repo_id = "shuxunoo/NFT-Net"
    # 云盘路径
    repo_type = "dataset"

    # 实例化上传对象
    u2c = U2C("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", base_path, repo_id, repo_type)

    cloud_file_path = "NFT1000/0bits.zip"
    local_file_path = r"C:\Users\Lenovo\Desktop\Web3_Projects\NFT_NET_Server\Datasets\Zipped_NFT_projs\0bits.zip"

    u2c.download_from_huggingface(cloud_file_path, local_file_path)



