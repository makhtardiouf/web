#!/bin/bash
# $Id$
# Will use .hgignore to ignore certain items
echo "Adding untracked  files"
hg add *

echo "Committing... "
hg commit

echo "Pushing to bigbucket..."
hg push
exit
