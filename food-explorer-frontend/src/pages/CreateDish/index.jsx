import { Footer } from "../../components/Footer";
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { HeaderMobile } from "../../components/HeaderMobile";
import { useSize } from "../../hooks/useSize";
import { Container, Edit, MainContainer } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UploadSimple, CaretLeft } from "@phosphor-icons/react";
import { Selection } from "../../components/Select";
import { useState } from "react";
import { TagItem } from "../../components/TagItem";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu";

export function CreateDish() {
  const windowsize = useSize();
  const navigate = useNavigate();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);
  const [data, setData] = useState({
    name: "Ex: Salada Cesar",
    category: "ref",
    price: "00,00",
    description:
      "Fale brevemente sobre o prato, seus ingredientes e composicao",
  });

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) => prevState.filter((item) => item !== deleted));
  }

  function handleCategoryChange(selectedCategory) {
    setData({ ...data, category: selectedCategory });
  }

  async function createDish() {
    if (
      !data.name ||
      !data.category ||
      !data.price ||
      !data.description ||
      ingredients.length < 1 ||
      !avatarFile
    ) {
      alert("Um ou mais campos obrigatórios não foram preenchidos.");
    } else {
      const formData = new FormData();
      formData.append("image", avatarFile);
      formData.append("name", data.name);
      formData.append("category", data.category);
      formData.append("price", data.price);
      formData.append("description", data.description);
      ingredients.forEach((ingredient, index) => {
        formData.append(`ingredients[${index}]`, ingredient);
      });

      await api.post(`/dishes`, formData);
      navigate("/");
    }
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
        <Edit>
          <div className="return-label" onClick={() => navigate("/")}>
            <CaretLeft size={32} />
            <p>voltar</p>
          </div>
          <div className="title">
            <h2>Adicionar prato</h2>
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
                placeholder="Ex: Salada cesar"
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
                    key={index}
                    value={item}
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
                placeholder={`R$ 00,00`}
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

          <Button
            title={"Salvar alterações"}
            id="submitButton"
            onClick={createDish}
          ></Button>
        </Edit>
        <Footer />
      </Container>
    </MainContainer>
  );
}
