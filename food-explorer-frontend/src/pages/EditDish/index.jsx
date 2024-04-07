import { Footer } from "../../components/Footer";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { HeaderMobile } from "../../components/HeaderMobile";
import { useSize } from "../../hooks/useSize";
import { Container, Edit, MainContainer } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UploadSimple, CaretLeft } from "@phosphor-icons/react";
import { Selection } from "../../components/Select";
import { useEffect, useState } from "react";
import { TagItem } from "../../components/TagItem";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";

export function EditDish() {
  const windowsize = useSize();
  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [data, setData] = useState(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchDish() {
      const responseDish = await api.get(`/dishes/${id}`);
      setData(responseDish.data);

      const responseTags = await api.get(`/ingredients/${id}`);
      setIngredients(responseTags.data.map((item) => item.name));
    }

    fetchDish();
  }, []);

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) => prevState.filter((item) => item !== deleted));
  }

  async function deleteDish() {
    await api.delete(`/dishes/${id}`);
    navigate("/");
  }

  async function editDish() {
    const formData = new FormData();
    formData.append("image", avatarFile);
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("description", data.description);
    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });

    await api.patch(`/dishes/${id}`, formData);
    navigate("/");
  }

  function handleCategoryChange(selectedCategory) {
    setData({ ...data, category: selectedCategory });
  }

  return (
    <MainContainer data-set-scroll={menuIsOpen}>
      <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Container>
        {windowsize > 1024 ? (
          <HeaderDesktop />
        ) : (
          <HeaderMobile setMenu={setMenuIsOpen} />
        )}
        {data && (
          <Edit>
            <div className="return-label" onClick={() => navigate("/")}>
              <CaretLeft size={32} />
              <p>voltar</p>
            </div>
            <div className="title">
              <h2>Editar prato</h2>
            </div>
            <div className="first-row">
              <div className="container-image-dish">
                <h3>Imagem do prato</h3>
                <label>
                  <Input
                    id="image"
                    accept="image/png, image/jpeg"
                    type="file"
                    style={{ cursor: "pointer" }}
                    onChange={(e) => setAvatarFile(e.target.files[0])}
                  />
                  <div>
                    <UploadSimple size={50} />
                    <p>Selecione a imagem</p>
                  </div>
                </label>
              </div>

              <div className="container-name-dish">
                <h3>Nome</h3>
                <Input
                  placeholder={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>

              <div className="container-category-dish">
                <h3>Categoria</h3>
                <Selection onChange={handleCategoryChange} />
              </div>
            </div>
            <div className="second-row">
              <div className="container-ingredients">
                <h3>Ingredientes</h3>
                <div id="ingredients">
                  {ingredients.map((item, index) => (
                    <TagItem
                      value={item}
                      key={index}
                      onClick={() => {
                        handleRemoveIngredient(item);
                      }}
                    />
                  ))}
                  <TagItem
                    isnew="true"
                    placeholder={"Adicionar"}
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>
              <div className="container-price">
                <h3>Preço</h3>
                <Input
                  placeholder={`R$ ` + data.price}
                  onChange={(e) => setData({ ...data, price: e.target.value })}
                />
              </div>
            </div>
            <div className="third-row">
              <h3>Descrição</h3>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              ></textarea>
            </div>

            <div id="buttons">
              <Button
                title={"Excluir prato"}
                id="deleteButton"
                onClick={deleteDish}
              ></Button>
              <Button
                title={"Salvar alterações"}
                id="submitButton"
                onClick={editDish}
              ></Button>
            </div>
          </Edit>
        )}
        <Footer />
      </Container>
    </MainContainer>
  );
}
