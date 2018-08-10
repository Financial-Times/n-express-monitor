node_modules/@financial-times/n-gage/index.mk:
	npm install --no-save @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

build: $(shell find src -type f)
	@echo 'Building…'
	@rm -rf dist
	@babel src -d dist --ignore '**/__tests__/*.js'

unit-test:
	@echo 'Unit Testing…'
	@jest

unit-test-cover:
	@jest --coverage

lint:
	@echo 'linting…'
	@eslint src

test: verify lint unit-test

test-cover: verify lint unit-test-cover

lint-fix:
	@eslint src --fix

watch:
	@watchman-make -s 1 -p 'src/**/*.js' -t lint-fix