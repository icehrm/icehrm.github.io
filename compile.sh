#!/bin/bash
rm -r /root/dev/jekyll/icehrmblog2/_site
mkdir /root/dev/jekyll/icehrmblog2/_site
rm -r /var/www/icehrmlive.com
mkdir /var/www/icehrmlive.com
jekyll build
cp -r /root/dev/jekyll/icehrmblog2/_site/* /var/www/icehrmlive.com/