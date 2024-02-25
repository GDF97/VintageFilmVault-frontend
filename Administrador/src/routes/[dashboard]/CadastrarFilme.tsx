import React, { FormEvent, useEffect, useState } from "react";
import "../../styles/routes/[dashboard]/CadastrarFilme.scss";
import { useDashboardAPI } from "../../hooks/dashboardAPI";
import { CategoryType } from "../../types/CategoryType";
import { FilmType } from "../../types/FilmType";
const CadastrarFilme = () => {
  const useAPI = useDashboardAPI();

  const initialState: FilmType = {
    nm_filme: "",
    ano_lancamento: 0,
    vl_filme: 0,
    desc_filme: "",
    tipo_midia: "",
    categorias: [],
  };

  const [image, setImage] = useState("");
  const [imageName, setImageName] = useState("");
  const [categoriasDisponiveis, setCategoriasDisponiveis] =
    useState<Array<CategoryType> | null>(null);

  const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<
    number[]
  >([]);

  const [tpMidia, setTpMidia] = useState("");
  const [midiaArr, setMidiaArr] = useState<string[]>([]);

  const [filmObj, setFilmObj] = useState<FilmType>({
    nm_filme: "",
    ano_lancamento: 0,
    vl_filme: 0,
    desc_filme: "",
    tipo_midia: "",
    categorias: [],
  });

  const resgatarGeneros = async () => {
    const data = await useAPI.resgatarGeneros();
    setCategoriasDisponiveis(data);
  };

  const handleCategories = (categoriaId: number) => {
    const newArrCategorias = [...categoriasSelecionadas];

    if (newArrCategorias.includes(categoriaId)) {
      const index = newArrCategorias.indexOf(categoriaId);
      newArrCategorias.splice(index, 1);
    } else {
      newArrCategorias.push(categoriaId);
    }

    setCategoriasSelecionadas(newArrCategorias);
  };

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImage(result);
      };
      reader.readAsDataURL(file);
      setImageName(file.name);
    }
    console.log(image);
  };

  const handleMidia = (midia: string) => {
    const newMidiaArr = [...midiaArr];

    if (newMidiaArr.includes(midia)) {
      const index = newMidiaArr.indexOf(midia);
      newMidiaArr.splice(index, 1);
    } else {
      newMidiaArr.push(midia);
    }

    setMidiaArr(newMidiaArr);

    if (newMidiaArr.length == 2) {
      setTpMidia("Ambos");
      return;
    }

    if (newMidiaArr[0] == undefined) {
      setTpMidia("");
      return;
    }

    setTpMidia(newMidiaArr[0]);
  };

  const handleInputChanges = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFilmObj(() => ({
      ...filmObj,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    filmObj.tipo_midia = tpMidia;
    filmObj.categorias = categoriasSelecionadas;

    const novoFilme: FilmType = {
      nm_filme: filmObj.nm_filme,
      ano_lancamento: filmObj.ano_lancamento,
      vl_filme: filmObj.vl_filme,
      desc_filme: filmObj.desc_filme,
      tipo_midia: filmObj.tipo_midia,
      categorias: filmObj.categorias,
    };

    const data = await useAPI.cadastrarFilme(novoFilme, image, imageName);
    console.log(data);
  };

  const handleReset = () => {
    setImage("");
    setFilmObj(initialState);
    setMidiaArr([]);
  };

  useEffect(() => {
    resgatarGeneros();
  }, []);

  return (
    <section className="cadastrar-filme-section">
      <form
        className="cadastrar-filme-wrapper"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="filme_poster">
          <img src={image} alt="" />
          <input
            type="file"
            accept="image/*"
            name="filme_poster"
            onChange={handleFiles}
          />
        </div>
        <div className="filme_info">
          <div className="inputGroup">
            <p>Nome do Filme</p>
            <input
              name="nm_filme"
              type="text"
              value={filmObj.nm_filme}
              onChange={handleInputChanges}
              autoComplete="off"
            />
          </div>
          <div className="DiffInputGroup">
            <div className="inputGroup">
              <p>Ano de lançamento do Filme</p>
              <input
                name="ano_lancamento"
                type="number"
                min={0}
                max={3000}
                value={filmObj.ano_lancamento}
                onChange={handleInputChanges}
              />
            </div>
            <div className="inputGroup">
              <p>Preço do Filme</p>
              <input
                name="vl_filme"
                type="number"
                min={0}
                step={0.01}
                value={filmObj.vl_filme}
                onChange={handleInputChanges}
              />
            </div>
          </div>
          <div className="categorias">
            {categoriasDisponiveis &&
              categoriasDisponiveis.map((categoria) => (
                <label
                  htmlFor={categoria.nm_genero}
                  key={categoria.id_genero}
                  className="chklabel"
                >
                  <input
                    type="checkbox"
                    name=""
                    id={categoria.nm_genero}
                    value={categoria.id_genero}
                    onChange={(e) => handleCategories(Number(e.target.value))}
                  />
                  {categoria.nm_genero}
                </label>
              ))}
          </div>
          <div className="inputGroup">
            <p>Descrição</p>
            <textarea
              name="desc_filme"
              maxLength={400}
              value={filmObj.desc_filme}
              onChange={handleInputChanges}
            />
          </div>
          <div className="tipo_midia">
            <label htmlFor="digital" className="chklabel">
              <input
                type="checkbox"
                name="digital"
                id="digital"
                value={"digitial"}
                onChange={(e) => handleMidia(e.target.value)}
              />
              Digital
            </label>
            <label htmlFor="fisica" className="chklabel">
              <input
                type="checkbox"
                name="fisica"
                id="fisica"
                value={"fisica"}
                onChange={(e) => handleMidia(e.target.value)}
              />
              Fisíca
            </label>
          </div>
          <div className="btnWrapper">
            <button type="submit">Cadastrar</button>
            <button type="reset" onClick={() => handleReset()}>
              Cancelar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CadastrarFilme;
