// export const Account = () => {

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

//     token ?

//     return (
//         <>
//             {

//                 :
//             }

//         </>
//     )
// }

export default function Account() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  if (token === null) {
    navigate("/");
  }
  return <div>my account</div>;
}
