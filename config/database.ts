export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection:
      env('DATABASE_CLIENT') === 'postgres'
        ? {
            // Render 上我们用连接串即可（你已经设置在 DATABASE_URL）
            connectionString: env('DATABASE_URL'),
            // Render 的 Postgres 需要 SSL；为安全起见默认开启
            ssl: { rejectUnauthorized: false },
          }
        : {
            // 本地开发仍用 SQLite，不影响你现在的工作流
            filename: env('DATABASE_FILENAME', '.tmp/data.db'),
          },
    useNullAsDefault: true,
  },
});