'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav className="navbar">
        <div className="navbar-top">
            <Link href="/" className={`navlink ${pathname === '/' ?'active':''}`}>
                <i className="pi pi-home pr-4"></i> Home</Link>
            <Link href="/users" className={`navlink ${pathname === '/users' ?'active':''}`}>
                <i className="pi pi-user pr-4"></i> Usuários</Link>
            <Link href="/sensors" className={`navlink ${pathname === '/sensors' ?'active':''}`}>
                <i className="pi pi-bolt pr-4"></i> Sensores</Link>
            <Link href="/reports" className={`navlink ${pathname === '/reports' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Relatórios</Link>
            <Link href="/monitoring" className={`navlink ${pathname === '/monitoring' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Monitoramento</Link>
            <Link href="/settings" className={`navlink ${pathname === '/settings' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Configurações</Link>
            <Link href="/notify" className={`navlink ${pathname === '/notify' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Notificações</Link>
            <Link href="/history" className={`navlink ${pathname === '/history' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Histórico de produção</Link>
            <Link href="/login" className={`navlink ${pathname === '/login' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Login</Link>
        </div>
        <div className="navbar-bottom">
            <hr />
            <Link href="/logout" className="navlink">
                <i className="pi pi-sign-out pr-4"></i> Logout</Link>
        </div>
      </nav>
  );
}
