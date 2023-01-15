.DELETE_ON_ERROR:
.DEFAULT_GOAL := wsgi

PYTHON = $(shell which python3)
SHELL = /bin/bash

LOCKFILE = .already.running.lock
PORT ?= 5000

.PHONY: wsgi
wsgi:
	flock -n $(LOCKFILE) $(PYTHON) -m http.server $(PORT)

.PHONY: clean
clean:
	@git clean -fdfx
