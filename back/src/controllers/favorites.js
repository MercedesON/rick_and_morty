require("dotenv").config(); 
const { User, Favorite } = require("../db");

const STATUS_OK = 200;
const STATUS_ERROR = 404;

async function postFav(req, res) {
  const { id, name, status, species, gender, origin, image, location, userId } =
    req.body;
  try {
    if (!id || !name || !image) {
      return res
        .status(STATUS_ERROR)
        .json({ message: "The require information is missing" });
    }
    const character = {
      id,
      name,
      status,
      species,
      gender,
      origin,
      image,
      location,
    };
    const char = await Favorite.create(character);
    if (userId) {
      const user = await User.findByPk(userId);
      if (user) {
        await user.addFavorite(char);
      }
    }

    res.status(STATUS_OK).json(char);
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}

async function deleteFav(req, res) {  
  const { id } = req.params;
  try {
    if (!id) {
      return res.status(STATUS_ERROR).json({ message: "id not found" });
    }
    const char = await Favorite.findByPk(id);
    if (char) {
      await Favorite.destroy({
        where: {
          id, 
        },
      });
      res.status(STATUS_OK).json(char);
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}

module.exports = {
  postFav,
  deleteFav,
};

