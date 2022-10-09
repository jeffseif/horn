.DELETE_ON_ERROR:
.DEFAULT_GOAL := wsgi

PYTHON = $(shell which python3)
SHELL = /bin/bash
VENV_DIR = venv

$(VENV_DIR):
	@$(PYTHON) -m venv $@
	@$@/bin/pip install --quiet --upgrade pip
	@$@/bin/pip install --quiet flask

LOCKFILE = .already.running.lock
HOST = 0.0.0.0
PORT ?= 5000
WSGI = wsgi.py

.PHONY: wsgi
wsgi: $(VENV_DIR) $(WSGI)
	@FLASK_RUN_HOST=$(HOST) FLASK_RUN_PORT=$(PORT) flock -n $(LOCKFILE) $</bin/flask run

.PHONY: clean
clean:
	@git clean -fdfx
