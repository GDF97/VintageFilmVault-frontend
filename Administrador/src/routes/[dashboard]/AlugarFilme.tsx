import { FormEvent, useEffect, useState } from "react";
import "../../styles/routes/[dashboard]/AlugarFilme.scss";
import { ClientType } from "../../types/ClientType";
import { FilmType } from "../../types/FilmType";
import { useDashboardAPI } from "../../hooks/dashboardAPI";

const AlugarFilme = () => {
  const api = useDashboardAPI();

  const [clienteSelecionado, setClienteSelecionado] = useState(0);
  const [filmeSelecionado, setFilmeSelecionado] = useState(0);
  const [midiaArr, setMidiaArr] = useState<string[]>([]);
  const [tpMidia, setTpMidia] = useState("");

  const [precoFilme, setPrecoFilme] = useState(0);

  const [clientesPesquisado, setClientesPesquisados] =
    useState<Array<ClientType> | null>(null);
  const [filmePesquisado, setFilmePesquisado] =
    useState<Array<FilmType> | null>(null);
  const [tipoMidia, setTipoMidia] = useState<string>("");

  const [nomeCliente, setNomeCliente] = useState("");
  const [nomeFilme, setNomeFilme] = useState("");

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

  const fetchClientesPorNome = async (nome: string) => {
    if (!nome) {
      setClientesPesquisados(null);
      return;
    }
    try {
      const data = await api.consultarClientesPeloNome(nome);
      if (!data.message) {
        setClientesPesquisados(data);
      } else {
        setClientesPesquisados(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFilmePorNome = async (nome: string) => {
    if (!nome) {
      setFilmePesquisado(null);
      setPrecoFilme(0);
      return;
    }

    try {
      const data = await api.consultarFilmesPeloNome(nome);
      if (!data.message) {
        setFilmePesquisado(data);
      } else {
        setFilmePesquisado(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    fetchClientesPorNome(nomeCliente);
  }, [nomeCliente]);

  useEffect(() => {
    fetchFilmePorNome(nomeFilme);
  }, [nomeFilme]);

  return (
    <section className="alugar-filme">
      <form className="alugar-filme-form" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <p>Nome do Cliente</p>
          <input
            type="text"
            value={nomeCliente}
            onChange={(e) => setNomeCliente(e.currentTarget.value)}
          />
          <div>
            {clientesPesquisado ? (
              clientesPesquisado.map((cliente) => (
                <button
                  key={cliente.id_cliente}
                  value={cliente.id_cliente}
                  onClick={(e) => {
                    setNomeCliente(cliente.nm_cliente);
                    setClienteSelecionado(Number(e.currentTarget.value));
                  }}
                >
                  {cliente.nm_cliente}({cliente.nm_email})
                </button>
              ))
            ) : (
              <button disabled>Não existe cliente com esse nome</button>
            )}
          </div>
        </div>
        <div className="inputGroup">
          <p>Nome do Filme</p>
          <input
            type="text"
            value={nomeFilme}
            onChange={(e) => setNomeFilme(e.currentTarget.value)}
          />
          <div>
            {filmePesquisado ? (
              filmePesquisado.map((filme) => (
                <button
                  key={filme.id_filme}
                  value={filme.id_filme}
                  onClick={(e) => {
                    setNomeFilme(filme.nm_filme);
                    setFilmeSelecionado(Number(e.currentTarget.value));
                    setPrecoFilme(Number(filme.vl_filme));
                    if (filme.tipo_midia) {
                      setTipoMidia(filme.tipo_midia);
                    }
                  }}
                >
                  {filme.nm_filme}
                </button>
              ))
            ) : (
              <button disabled>Não existe filme com esse nome</button>
            )}
          </div>
        </div>
        {filmeSelecionado ? (
          <div className="checkbox-wrapper">
            {tipoMidia === "Ambos" ? (
              <>
                {" "}
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
              </>
            ) : (
              <label htmlFor="fisica" className="chklabel">
                <input
                  type="checkbox"
                  value={tipoMidia}
                  onChange={(e) => handleMidia(e.target.value)}
                />
                {tipoMidia}
              </label>
            )}
          </div>
        ) : null}
        <p>Preço: {precoFilme ? `${precoFilme.toFixed(2)}` : "R$00,00"}</p>
        <div className="inputGroup"></div>
        <button className="alugar" type="submit">
          Alugar Filme
        </button>
        <button className="cancelar" type="reset">
          Cancelar
        </button>
      </form>
    </section>
  );
};

export default AlugarFilme;
