

# Joseph Whiteaker
# 6/3/21
# Padding Scripts


def format_class(name: str, attr: str):
    list_vals = []
    for i in range(0, 100):
        list_vals.append("."+name+str(i) +
                         " { " + attr + ": " + str(i) + "px }")
    return list_vals


x = format_class("top-px-", "top")

file = open("output/output.txt", "w+")
for i in range(len(x)):
    file.write("{} \n".format(str(x[i])))

file.close()
