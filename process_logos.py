import os
from PIL import Image
import numpy as np

def crop_logo(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        
        # Get the bounding box of non-zero alpha pixels
        bbox = img.getbbox()
        
        if bbox:
            original_size = img.size
            cropped_img = img.crop(bbox)
            cropped_img.save(output_path)
            print(f"Processed {input_path}: Original {original_size} -> Cropped {cropped_img.size}")
            return cropped_img
        else:
            print(f"No content found in {input_path}")
            return None
            
    except Exception as e:
        print(f"Error processing {input_path}: {e}")
        return None

def recolor_black_to_white(input_path, output_path, check_green=True):
    try:
        img = Image.open(input_path).convert("RGBA")
        data = np.array(img)
        
        # Define what counts as "black" or dark grey
        # R, G, B all < 150 to catch lighter grays
        r, g, b, a = data.T
        
        # Identify dark pixels (e.g. text)
        dark_pixels = (r < 150) & (g < 150) & (b < 150) & (a > 0)
        
        # Use numpy boolean indexing to change those pixels to white
        data[..., :-1][dark_pixels.T] = (255, 255, 255)
        
        new_img = Image.fromarray(data)
        new_img.save(output_path)
        print(f"Recolored {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"Error recoloring {input_path}: {e}")

if __name__ == "__main__":
    # 1. Crop original to temp/cropped
    logos_to_process = [
        ("public/logos/NVIDIA/nvidia-inception-logo.png", "public/logos/NVIDIA/nvidia-inception-logo-cropped.png"),
        ("public/logos/Google/gcloud_for_startups.png", "public/logos/Google/gcloud-cropped.png"),
        ("public/logos/Canvas/Canvas_Horizontal_Full-Color_RGB.png", "public/logos/Canvas/Canvas_Horizontal_Full-Color_RGB-cropped.png")
    ]
    
    for input_path, output_path in logos_to_process:
        if os.path.exists(input_path):
            crop_logo(input_path, output_path)
            
            # 2. If it's the NVIDIA logo, explicitly create a white-text version
            if "nvidia" in input_path.lower():
                white_text_path = output_path.replace(".png", "-white.png")
                recolor_black_to_white(output_path, white_text_path)
            
            # 3. If it's the Canvas logo, explicitly create a white-text version
            if "canvas" in input_path.lower():
                white_text_path = output_path.replace(".png", "-white.png")
                recolor_black_to_white(output_path, white_text_path)
            
            # 4. If it's the Google logo, explicitly create a white-text version
            if "google" in input_path.lower():
                white_text_path = output_path.replace(".png", "-white.png")
                recolor_black_to_white(output_path, white_text_path)
        else:
            print(f"File not found: {input_path}")
