import React from "react";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../context/auth";

export function Routes() {
  const { user } = useAuth();

  return <>{user.id ? <AppRoutes /> : <AuthRoutes />}</>;
}
