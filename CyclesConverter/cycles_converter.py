# 1 cycle = 2.5 months
# 1 month = 30 days
# 1 day = 24 hours
# 1 hour = 60 min
# 1 min = 60 sec

formats = {"month": 2.5, "days": 30, "h": 24, "min": 60, "sec": 60}

cycles = float(input("enter value in cycles: "))
format = input("enter format to convert to["+ ",".join(formats.keys()) + "]: ")
if format not in formats.keys():
    print("given format (" + format + ") not in formats")
    exit()

converted = cycles
for key in formats.keys():
    converted = converted * formats[key]
    if key == format:
        break

print(str(cycles) + " cycles = " + str(converted) + " " + format)

new_cylces = converted
for key in (list(formats.keys())[:list(formats.keys()).index(format)+1])[::-1]:
    new_cylces = new_cylces / formats[key]

print(str(converted) + " " + format + " = " + str(new_cylces) + " cycles")
