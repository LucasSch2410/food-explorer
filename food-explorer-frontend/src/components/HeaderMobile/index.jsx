import { useAuth } from "../../hooks/auth";
import { Container, Menu, Logo, } from "./styles";
import { List, Receipt } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function HeaderMobile({ requests, setMenu }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  return (
    <>
      <Container>
        <Menu>
          <List onClick={() => setMenu(true)} />
        </Menu>

        <Logo onClick={() => navigate("/")}>
            <svg
                width="39"
                height="44"
                viewBox="0 0 39 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z"
                fill="#065E7C"
                />
            </svg>
            <h1>food explorer</h1>
            {
                user.isAdmin == 1
                &&
                <span className="admin">admin</span>
            }
        </Logo>

        {
            user.isAdmin == 0 
            &&
                <Menu>
                    <div className="requests-container">
                    <Receipt />
                    <div className="request-number">{requests}</div>
                    </div>
                </Menu>
        }


      </Container>
    </>
  );
}
