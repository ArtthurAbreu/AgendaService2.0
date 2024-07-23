import styles from './Tabela.module.scss';
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import React, { useState } from 'react';

const Tabela = () => {
    const [data, setData] = useState([
        { id: 1, cliente: 'João', mecanico: 'Arthur', servico: 'Troca de Peneu', horario: '09:00' },
        { id: 2, cliente: 'Carla', mecanico: 'Pedro', servico: 'Eletrica',  horario: '09:00' },
        { id: 3, cliente: 'Joana', mecanico: 'Joab', servico: 'Vulcanização',  horario: '09:00'}
    ]);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleEdit = (id) => {
        const cliente = prompt('Digite o novo cliente:');
        const mecanico = prompt('Digite a novo mecanico:');
        const servico = prompt('Digite o novo serviço:');
        const horario = prompt('Digite o novo horario:');
        setData(data.map(item => item.id === id ? { ...id, cliente, mecanico, servico, horario } : item));
    };

    return (
        <div className={styles.container}>
            <h2>Agedamentos</h2><br />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Cliente</th>
                        <th>Mecânico</th>
                        <th>Serviço</th>
                        <th>Horário</th>
                        <th>Ações</th>
                      
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                            <td>{item.cliente}</td>
                            <td>{item.mecanico}</td>
                            <td>{item.servico}</td>
                            <td>{item.horario}</td>
                            <td>
                            <button onClick={() => handleEdit(item.id)}><MdOutlineModeEdit /></button>
                            <button onClick={() => handleDelete(item.id)}><RiDeleteBin6Line /></button>
                            </td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;