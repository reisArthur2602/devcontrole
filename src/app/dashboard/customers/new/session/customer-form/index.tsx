'use client';
import { Form } from '@/components/form';
import React from 'react';

export const CustomerForm = () => {
  return (
    <Form>
      <Form.Label>
        Email
        <Form.Field placeholder="email@email.com" />
      </Form.Label>

      <Form.Label>
        Nome
        <Form.Field placeholder="Nome Completo..." />
      </Form.Label>

      <Form.Label>
        Telefone
        <Form.Field placeholder="(99) 99999-9999" />
      </Form.Label>

      <Form.Submit>Cadastrar</Form.Submit>
    </Form>
  );
};
