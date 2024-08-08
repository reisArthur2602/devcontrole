'use client';
import { Form } from '@/components/form';
import React from 'react';

export const TicketForm = () => {
  return (
    <Form>
      <Form.Label>
        Título
        <Form.Field placeholder="Título do chamado..." />
      </Form.Label>

      <Form.Label>
        Descrição
        <Form.TextArea placeholder="Descreva o problema..." />
      </Form.Label>

      <Form.Label>
        Cliente
        <Form.Select>
          <option value="">Selecione um cliente</option>
        </Form.Select>
      </Form.Label>

      <Form.Submit>Cadastrar</Form.Submit>
    </Form>
  );
};
