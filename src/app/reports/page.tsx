import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Report() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Relatórios" username="André Souza" />
            <main>
              <h1>Conteúdo</h1>
            </main>
          </div>
        </div>
    );
}

// React Router-DOM