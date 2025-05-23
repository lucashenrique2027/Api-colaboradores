import Colaboradores from "../Models/ColaboradoresModel.js";

async function list(req, res) {
  try {
    const colaboradores = await Colaboradores.findAll();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao listar colaboradores" });
  }
}

async function get(req, res) {
  const { id } = req.params;
  try {
    const colaborador = await Colaboradores.findByPk(id);

    if (!colaborador) {
      return res.status(404).json({ erro: "Colaborador não encontrado" });
    }

    res.json(colaborador);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar colaborador" });
  }
}

async function insert(req, res) {
  const { nome, cargo, email } = req.body;

  if (!nome || !cargo || !email) {
    return res.status(400).json({ erro: "Nome, cargo e email são obrigatórios" });
  }

  try {
    const colaborador = await Colaboradores.create({ nome, cargo, email });
    res.status(201).json(colaborador);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao inserir colaborador", detalhes: error.message });
  }
}

export default { list, get, insert };