INS=$(wildcard *.md)
OUTS=$(INS:.md=.html)

all: $(OUTS)

%.html: %.md
	pandoc --template=html.tmpl $< -o $@
