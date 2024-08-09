'use client';

import { Form } from '@/components/form';
import { CustomerRequest } from '@/dtos/customer';
import { ApiCore } from '@/lib/axios-config';
import { CustomerValidator } from '@/lib/validators/customer';
import { CustomerService } from '@/services/customer';
import { normalizePhoneNumber } from '@/utils/masks';
import { zodResolver } from '@hookform/resolvers/zod';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const CustomerForm = ({ userId }: { userId: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm<CustomerRequest>({
    resolver: zodResolver(CustomerValidator),
  });

  const phoneValue = watch('phone');

  useEffect(() => {
    setValue('phone', normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  const onRegister = async (data: CustomerRequest) => {
    await CustomerService.create({ ...data, userId });
    console.log('Cliente cadastrado com sucesso!');
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onRegister)}>
      <Form.Label>
        Email
        <Form.Field
          placeholder="email@email.com"
          {...register('email')}
          helpertext={errors.email?.message}
        />
        {errors && (
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        )}
      </Form.Label>

      <Form.Label>
        Nome
        <Form.Field
          placeholder="Nome Completo..."
          {...register('name')}
          helpertext={errors.name?.message}
        />
        {errors && (
          <p className="text-xs text-red-500">{errors.name?.message}</p>
        )}
      </Form.Label>

      <Form.Label>
        Telefone
        <Form.Field
          placeholder="(99) 99999-9999"
          {...register('phone')}
          helpertext={errors.phone?.message}
        />
        {errors && (
          <p className="text-xs text-red-500">{errors.phone?.message}</p>
        )}
      </Form.Label>

      <Form.Submit type="submit">Cadastrar</Form.Submit>
    </Form>
  );
};
