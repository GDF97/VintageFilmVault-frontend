import { useEffect, useState } from "react";
import {
  CategoriesWrapper,
  CategoryButton,
  CategoryButtonBody,
  CategoryTitle,
} from "../styles/CategoriesFilter.style";
import { filmsAPI } from "../hooks/filmsAPI";
import { CategoryType } from "../types/CategoryType";

interface fnProps {
  fnSetCategory: React.Dispatch<React.SetStateAction<string>>;
}

const CategoriesFilter = ({ fnSetCategory }: fnProps) => {
  const api = filmsAPI();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [categoriesArray, setCategoriesArray] =
    useState<Array<CategoryType> | null>(null);

  const handleCategories = (category: string) => {
    setCategory(category);
    setOpen(false);
    fnSetCategory(category);
  };

  const getCategories = async () => {
    try {
      const data = await api.getAllCategories();
      setCategoriesArray(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryButtonBody>
      <CategoryTitle onClick={() => setOpen(!open)}>
        {category != "" ? category : "Categorias"}{" "}
      </CategoryTitle>
      {open && (
        <CategoriesWrapper>
          {categoriesArray &&
            categoriesArray.map((ctg) => (
              <CategoryButton
                key={ctg.id_genero}
                value={ctg.nm_genero}
                onClick={(e) => handleCategories(e.currentTarget.value)}
              >
                {ctg.nm_genero}
              </CategoryButton>
            ))}
          {category != "" && (
            <CategoryButton onClick={() => handleCategories("")}>
              Todas as Categorias
            </CategoryButton>
          )}
        </CategoriesWrapper>
      )}
    </CategoryButtonBody>
  );
};

export default CategoriesFilter;
