import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "@/pages/public/SignInPage";
import ProfilePage from "@/pages/private/ProfilePage";
import PrivatePageWrapper from "../common/PrivatePageWrapper";
import PublicPageWrapper from "../common/PublicPageWrapper";
import GuardsPage from "@/pages/private/GuardsPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicPageWrapper>
              <SignInPage />
            </PublicPageWrapper>
          }
        />
        <Route path="/" element={<PrivatePageWrapper />}>
          <Route index element={<GuardsPage />} />
          <Route index path="/guards" element={<GuardsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
