
import glob

portfolio_items = glob.glob('items/*.html')
for pitms in portfolio_items:
  with open(pitms, 'r') as f:
    txt = f.read()
    print(txt)
