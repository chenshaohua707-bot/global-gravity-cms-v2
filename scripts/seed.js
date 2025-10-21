const { createStrapi } = require("@strapi/strapi");

(async () => {
  const app = await createStrapi().load();
  await app.bootstrap();

  const es = strapi.entityService;

  const ensureOne = async (uid, where, data) => {
    const found = await es.findMany(uid, { filters: where, limit: 1 });
    if (Array.isArray(found) && found.length) return found[0];
    return await es.create(uid, { data });
  };

  // 你的首页六大分类（可随时在后台改名/增删）
  const cats = ["家电数码","手机平板","居家生活","美妆个护","运动户外","图书文创"];
  for (const name of cats) {
    await ensureOne("api::category.category", { name: { $eq: name } }, { name });
  }

  // 一个默认品牌
  await ensureOne("api::brand.brand", { name: { $eq: "GlobalGravity" } }, { name: "GlobalGravity" });

  // 三个默认标签
  for (const name of ["热卖","新品","推荐"]) {
    await ensureOne("api::tag.tag", { name: { $eq: name } }, { name });
  }

  console.log("✅ Seed 完成");
  await strapi.destroy();
  process.exit(0);
})();
