---
title: FAQ
toc: content
order: 7
---

# Frequently Asked Questions

The following are some frequently asked questions

## Why not use `less` or `sass` for style writing, but use `jss`, a `css-in-js` library?

This project uses [father](https://github.com/umijs/father) for underlying packaging. This library currently does not support compiling `less` or `sass` during packaging, instead, it only transfers files directly. Therefore, if you use `less` or `sass` to write styles, users need to install `less-loader` and other `loaders` for transformation themselves, which creates a high mental burden. That's probably the main reason that `css-in-js` solution is used.
