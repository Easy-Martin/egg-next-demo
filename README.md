# egg-next-demo

support egg2+



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start `npm run build && egg-scripts start --daemon --title=egg-server-my-demo-egg`
$ npm stop
$ npm build `next build`
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

[PS]: https://github.com/tokenfoundry/koa-react-ssr-example