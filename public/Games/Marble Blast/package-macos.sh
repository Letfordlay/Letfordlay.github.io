#!/bin/sh

if [ -z "$1" ]; then
	echo "Please pass version string as the first argument.\nEx:\n$0 v1.3.1"
	exit 1
fi

if [ ! -d "macos-dist/MarbleBlast Ultra.app" ]; then
	cp -r "macos-dist/MarbleBlast Ultra.app.in" "macos-dist/MarbleBlast Ultra.app" || exit $?
else
	cp "macos-dist/MarbleBlast Ultra.app.in/Contents/Info.plist" "macos-dist/MarbleBlast Ultra.app/Contents/Info.plist"  || exit $?
fi

# Replace version string
sed -i "" -e "s/@VERSION@/$1/" "macos-dist/MarbleBlast Ultra.app/Contents/Info.plist" || exit $?

# Copy binary
cp native/marblegame "macos-dist/MarbleBlast Ultra.app/Contents/MacOS/marblegame" || exit $?
# Copy data
cp -r data "macos-dist/MarbleBlast Ultra.app/Contents/Resources/" || exit $?

cd "macos-dist/MarbleBlast Ultra.app/Contents/MacOS/"
install_name_tool -change ui.hdll @rpath/ui.hdll \
	-change openal.hdll @rpath/openal.hdll \
	-change fmt.hdll @rpath/fmt.hdll \
	-change sdl.hdll @rpath/sdl.hdll \
	-change ssl.hdll @rpath/ssl.hdll \
	-change datachannel.hdll @rpath/datachannel.hdll \
	-change libhl.dylib @rpath/libhl.dylib \
	-change libSDL2-2.0.0.dylib @rpath/libSDL2-2.0.0.dylib \
	-add_rpath @executable_path/../Frameworks marblegame || exit $?

echo "Tried to update dylib references in executable."
echo "Please use otool -L to ensure that the libraries are referenced as @rpath. This is usually an issue with libSDL2-2.0.0.dylib"
echo
echo "Please fill macos-dist/MarbleBlast Ultra.app/Contents/Frameworks with the dylibs,"
echo "and use install_name_tool to update their IDs to match with marblegame executable."

