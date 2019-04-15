---
layout: article
title: "Linux on Windows!?"
excerpt: "Windows 10 finally finds its killer app: Linux"
categories: blog
modified: 2017-07-02T20:45:21-04:00
tags: [linux, windows, bash]
comments: true
image:
  teaser: wsl-tmux-teaser.png
toc: false
---

{{ page.excerpt }}

If you, like me, are one of those devs who prefer a Linux environment but are stuck on Windows because of reasons (in my case, accessibility software), if you're tired of struggling with Cygwin and MinGW, if you're put off by the hassle of running everything in VMs: do yourself a favor & try [Windows Subsystem for Linux](https://msdn.microsoft.com/en-us/commandline/wsl/about). It may sound like just another Cygwin-alike, but trust me, it is way better.

## So What's the Dealio?

WSL is a compatibility layer that implements Linux system calls on top of the Windows kernel, allowing you to run Linux binaries as though they were native. On top of this frankenkernel, you get a full Ubuntu image, giving you a good old Bash prompt, all the GNU utils you know & love, and access to build toolchains for whatever you need. apt-get usually Just Works™ too. I got a decent dev environment up with the GNU toolchain, oh-my-zsh, vim, & tmux almost immediately.

There are limits, of course: there remain unimplemented system calls which will totally break some programs (for example, until recently all Haskell programs were broken due to unimplemented `timer_create`), and anything graphical is not officially supported. Using Linux cli apps in a Windows CMD or Powershell can also make things look pretty wonky. This was supposed to be [Solarized](http://ethanschoonover.com/solarized):
![WSL in Powershell, displaying completely incorrect colors][wsl-color]

Personally, I got fed up with Powershell after spending days trying to get my dotfiles working. But why stop at what's officially supported?

## How Far We Can Push It

Goal: ditch Windows terminal emulators & get a real Linux terminal up. We need X for this. While you will have zero luck running an X server inside WSL, you can definitely run [a Windows X server](https://sourceforge.net/projects/vcxsrv/), and then `export DISPLAY=:0.0` and test your luck. Some graphical applications will work perfectly, others will fail miserably. I couldn't get Konsole up after hours of tweaking it, but the stock apt package for [rxvt-unicode](https://wiki.archlinux.org/index.php/rxvt-unicode) worked perfectly.

Next step: dotfiles. I wanted to get my old Linux dotfiles working, and lots of them did, but I had a bit of trouble with my .Xresources. My X server wouldn't recognize them until I opened a terminal, manually loaded them with `xrdb`, then popped open a second terminal. Any of the usual solutions failed to work, because they usually load at login and WSL doesn't actually log in per se. I ended up just symlinking .Xdefaults to .Xresources, which is probably a terrible idea, but at least it made it work?? I had similar problems changing my default shell because `chsh` doesn't work as expected if you don't log in, but [apparently that's been fixed](https://github.com/Microsoft/BashOnWindows/issues/846).

Ultimately I managed to get vim, tmux, zsh, urxvt, feh, and Powerline working the way I expected. I'm hoping to get some more complex GUI stuff working & possibly i3.

## Showing off

Here's my current setup:

![tmux, vim, zsh, and Poewrline operating inside urxvt on WSL][wsl-tmux]

## But is it useful?

My assessment: heck yeah! I've been using this as my primary C/C++ dev environment for about two weeks now and it is lightyears beyond trying to hack everything together on Windows utilities & MinGW. It'll never be as smooth as a real Linux install, but it's more than good enough to do real work in. For as long as I'm stuck on Windows, I plan to keep exploring and expanding this.

[wsl-tmux]: {{ site.url }}/images/wsl-tmux.png
[wsl-color]: {{ site.url }}/images/wsl-color-probs.png
