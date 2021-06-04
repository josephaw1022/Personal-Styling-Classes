

# Joseph Whiteaker
# 6/3/21
# Padding Scripts


def format_class(name: str, attr: str):
    list_vals = []
    for i in range(0, 100):
        list_vals.append("."+name+str(i) +
                         " { " + attr + ": " + str(i) + "px }")
    return list_vals


x = format_class("pad-percent-", "padding")

for i in range(100):
    print(x[i])
