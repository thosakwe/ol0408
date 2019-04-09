.PHONY: clean
all: ol0408.css

clean:
	rm -rf *.css

%.css: %.scss
	npx node-sass $< > $@
