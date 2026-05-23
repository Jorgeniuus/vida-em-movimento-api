const db = require("../firebase/firebase");

const createOrUpdateUser = async (req, res) => {
  try {
    const data = req.body;

    if (!data.email) {
      return res.status(400).json({
        message: "Email é obrigatório"
      });
    }

    const safeEmail = data.email
      .toLowerCase()
      .replace(/[@.]/g, "_");

    await db.collection("users")
      .doc(safeEmail)
      .set({
        ...data,
        updatedAt: new Date().toISOString(),
      }, { merge: true });

    res.status(200).json({
      message: "Usuário salvo com sucesso",
    });

  } catch (error) {
     console.log(error);

    return res.status(500).json({
      error: error.message
    });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;

    const safeEmail = email
    .trim()
    .toLowerCase();

    const doc = await db
      .collection("users")
      .doc(safeEmail)
      .get();

    if (!doc.exists) {
      return res.status(404).json({
        message: "Usuário não encontrado",
      });
    }

    res.status(200).json(doc.data());

  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const unsubscribeUser = async (req, res) => {
  try {
    const email = req.params.email
      .trim()
      .toLowerCase();

    await db
      .collection('users')
      .doc(email)
      .set(
        {
          isSubscribed: false,
        },
        { merge: true }
      );

    return res.status(200).json({
      message: 'Usuário cancelou os lembretes',
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createOrUpdateUser,
  getUserByEmail,
  unsubscribeUser,
};