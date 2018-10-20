import Sequelize from 'sequelize';

import database from 'src/lib/database';

export const schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
  },
};

const Post = database.define('post', schema);
Post.associate = models => {
  Post.belongsTo(models.Category);
  Post.hasMany(models.Comment);
};

export default Post;
