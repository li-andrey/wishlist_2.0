import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllWishlists } from "../../redux/slices/wishlistSlice";

export default function PageHome() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wishlists } = useSelector((state) => state.wishlists);
  console.log("343", wishlists);
  React.useEffect(() => {
    dispatch(getAllWishlists());
  }, []);

  return (
    <div className="cover">
      <h1 className="main_h1">Мы поможем подобрать подарок вашим близким</h1>
      <p className="second_title">
        <em>
          Для всех тех, кто точно знает какой хочет подарок и для всех тех, кто
          не знает, что подарить
        </em>
      </p>

      <div className="main-content">
        <h2 className="main_h2">Список всех Whishlists:</h2>
        <div className="table-users">
          <table className="table1">
            <tbody>
              {wishlists.map((el) => (
                <tr key={el._id}>
                  <td className="tb-users">
                    <div>{el.owner.name}</div>
                  </td>
                  <td className="tb-users">
                    <button
                      className="btn-open"
                      onClick={() => {
                        navigate(`/wishlists/${el._id}`);
                      }}
                    >
                      Перейти
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
