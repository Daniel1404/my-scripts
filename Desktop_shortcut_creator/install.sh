#!/bin/bash

### SHORTCUT CREATOR BY DANIEL DIAZ ###
#
#  ____   ____
# |  _ \ |  _ \   Copyright (c) 2020 Daniel Diaz
# | | | || | | |
# | |_| || |_| |  http://www.github.com/Daniel1404/scripts
# |____/ |____/
#

# Script to install the create script
echo "Created by Daniel Diaz: http://www.github.com/Daniel1404/"
echo " "
echo " "
echo "You must be in Desktop_shortcut_creator folder to install correctly the program"

echo " "
echo " "
PD=$(pwd)

echo "-------- STARTING INSTALLATION ---------"
echo " "
echo " "
installation_folder=~/.local/share/Desktop_shortcut_creator/
executable_folder=~/.local/bin/

echo "Copying to $installation_folder"

# This removes and create again the installation folder to avoid duplicates
rm -rf $installation_folder
mkdir $installation_folder
cp -rf ./* $installation_folder
cd $installation_folder

echo " "
echo " "
echo "----- LINKING EXECUTABLES -----"
echo " "
echo " "
echo "Creating executables in $executable_folder"

echo " "
echo " "


# Linking executables for terminal usage

# This removes and create again the links to avoid duplicates
rm -rf ${executable_folder}shortcut

ln -s $PWD/create_shortcut.sh  ${executable_folder}shortcut

cd $PD

echo "Installation has finished"
echo ""
echo "Now you could remove this folder"
