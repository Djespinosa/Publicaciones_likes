const db = require('../../database/models/index.js');

const User = db.users;

const controller = {
    usersList: async function (req, res) {
      try {
          const Users = await User.findAll({})            
          return res.render('users',{        
              Users,
              status: 200
          });

      } catch (err) {
          console.error(err);
      }
  },
    addUser: async function (req, res) {
      try {
        return res.render("addUser");
      } catch (err) {
        console.error(err);
      }
  },
    create: async function (req, res) {
      try {
        await User.create({
              last_name: req.body.last_name,
              name: req.body.name,
              email: req.body.email,
          });
          res.redirect('/users');
      } catch (err) {
          console.error(err);
      }    
  },
    editUser: async function (req, res) {
      try {
        const id = req.params.id;

        const Users = await User.findByPk(id);
        return res.render('editUser', {
          Users});
      } catch (err) {
          console.error(err);
      }
},
  update: async function (req, res) {
        try {
            const id = req.params.id;
            const Users = await User.findByPk(id);
            await Users.update({
              last_name: req.body.last_name,
              name: req.body.name,
              email: req.body.email,
            });
            res.redirect('/users');
        }
        catch (err) {
            console.error(err);
          }
  },
  delete: async function (req, res) {
    try {
        const id = req.params.id;
        await User.destroy({
            where: { id: id },
        });
        return res.redirect('/users');
    } catch (err) {
        console.error(err);
    }
  }

} 
  module.exports = controller;