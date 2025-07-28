async function loggerMiddleware(ctx, next) {
  console.log('Logging request:', ctx.request.url);
  await next();
}

class MiddlewareStack {
  constructor() {
    this.stack = [];
  }

  // 添加中间件到堆栈
  use(middleware) {
    this.stack.push(middleware);
  }

  // 执行中间件堆栈
  async run(ctx, next = () => {}) {
    const dispatch = async (i) => {
      if (i === this.stack.length) return next();
      const middleware = this.stack[i];
      try {
        await middleware(ctx, dispatch.bind(null, i + 1));
      } catch (err) {
        throw err;
      }
    };
    dispatch(0);
  }
}

class Context {
  constructor() {
    this.request = { url: '/' };
    this.response = { body: null };
  }
}

async function handleRequest() {
  const ctx = new Context();
  const stack = new MiddlewareStack();

  // 添加中间件
  stack.use(loggerMiddleware);
  stack.use(async (ctx, next) => {
    ctx.response.body = 'Hello World';
    await next();
  });

  // 执行中间件堆栈
  await stack.run(ctx);

  console.log('Response:', ctx.response.body);
}

handleRequest();