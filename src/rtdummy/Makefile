# Makefile snippet for your LFS tools repository

LIBDIR ?= /usr/lib

.PHONY: install-rt-stub clean

librt.a:
	$(CC) $(CFLAGS) -c tridentu_stub.c -o tridentu_stub.o
	$(AR) rcs librt.a tridentu_stub.o
	$(AR) rcs libdl.a tridentu_stub.o

install-rt-stub: librt.a
	install -v -m644 librt.a $(DESTDIR)$(LIBDIR)/librt.a
	install -v -m644 libdl.a $(DESTDIR)$(LIBDIR)/libdl.a

	$(MAKE) clean

clean:
	rm -f  tridentu_stub.o librt.a libdl.a
