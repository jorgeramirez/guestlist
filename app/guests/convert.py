#!/usr/bin/env python

"""
Converts the guests list in CSV format into JSON
format and saves it in guests.json file

@author: Jorge Ramirez <jorgeramirez1990@gmail.com>
"""

import re
import json

lines = open('guests.csv', 'r').readlines()
out_file = open('guests.json', 'w')
pattern = re.compile('(\d+;.*;\d+)')
guests = []

for l in lines:
    m = pattern.match(l)
    if m:
        m = m.group(0).split(';')
        guests.append({
            "tableNumber": m[0],
            "description": m[1],
            "qty": m[2],
            "present": False
        })
out_file.write(json.dumps(guests))
out_file.close()