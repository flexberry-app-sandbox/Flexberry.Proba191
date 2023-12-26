import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProba19ВакантДолжнLForm from './forms/i-i-s-proba19-вакант-должн-l';
import IISProba19ГрафСобесLForm from './forms/i-i-s-proba19-граф-собес-l';
import IISProba19ДолжнСотрLForm from './forms/i-i-s-proba19-должн-сотр-l';
import IISProba19ОрганизацияLForm from './forms/i-i-s-proba19-организация-l';
import IISProba19ПланирСобесLForm from './forms/i-i-s-proba19-планир-собес-l';
import IISProba19РегРезультLForm from './forms/i-i-s-proba19-рег-результ-l';
import IISProba19РегистАнкетыLForm from './forms/i-i-s-proba19-регист-анкеты-l';
import IISProba19СотрудникиLForm from './forms/i-i-s-proba19-сотрудники-l';
import IISProba19ВакантДолжнEForm from './forms/i-i-s-proba19-вакант-должн-e';
import IISProba19ГрафСобесEForm from './forms/i-i-s-proba19-граф-собес-e';
import IISProba19ДолжнСотрEForm from './forms/i-i-s-proba19-должн-сотр-e';
import IISProba19ОрганизацияEForm from './forms/i-i-s-proba19-организация-e';
import IISProba19ПланирСобесEForm from './forms/i-i-s-proba19-планир-собес-e';
import IISProba19РегРезультEForm from './forms/i-i-s-proba19-рег-результ-e';
import IISProba19РегистАнкетыEForm from './forms/i-i-s-proba19-регист-анкеты-e';
import IISProba19СотрудникиEForm from './forms/i-i-s-proba19-сотрудники-e';
import IISProba19ВакантДолжнModel from './models/i-i-s-proba19-вакант-должн';
import IISProba19ГрафСобесModel from './models/i-i-s-proba19-граф-собес';
import IISProba19ДолжнСотрModel from './models/i-i-s-proba19-должн-сотр';
import IISProba19ОрганизацияModel from './models/i-i-s-proba19-организация';
import IISProba19ПланирСобесModel from './models/i-i-s-proba19-планир-собес';
import IISProba19РегРезультModel from './models/i-i-s-proba19-рег-результ';
import IISProba19РегистАнкетыModel from './models/i-i-s-proba19-регист-анкеты';
import IISProba19СотрудникиModel from './models/i-i-s-proba19-сотрудники';
import IISProba19ТЧГрафСобесModel from './models/i-i-s-proba19-т-ч-граф-собес';
import IISProba19ТЧРегРезультModel from './models/i-i-s-proba19-т-ч-рег-результ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proba19-вакант-должн': IISProba19ВакантДолжнModel,
    'i-i-s-proba19-граф-собес': IISProba19ГрафСобесModel,
    'i-i-s-proba19-должн-сотр': IISProba19ДолжнСотрModel,
    'i-i-s-proba19-организация': IISProba19ОрганизацияModel,
    'i-i-s-proba19-планир-собес': IISProba19ПланирСобесModel,
    'i-i-s-proba19-рег-результ': IISProba19РегРезультModel,
    'i-i-s-proba19-регист-анкеты': IISProba19РегистАнкетыModel,
    'i-i-s-proba19-сотрудники': IISProba19СотрудникиModel,
    'i-i-s-proba19-т-ч-граф-собес': IISProba19ТЧГрафСобесModel,
    'i-i-s-proba19-т-ч-рег-результ': IISProba19ТЧРегРезультModel
  },

  'application-name': 'Proba19',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Proba19',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proba19',
          title: 'Proba19'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        proba19: {
          caption: 'Proba19',
          title: 'Proba19',
          'i-i-s-proba19-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proba19-должн-сотр-l': {
            caption: 'Должн сотр',
            title: ''
          },
          'i-i-s-proba19-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-proba19-планир-собес-l': {
            caption: 'Планир собес',
            title: ''
          },
          'i-i-s-proba19-граф-собес-l': {
            caption: 'Граф собес',
            title: ''
          },
          'i-i-s-proba19-рег-результ-l': {
            caption: 'Рег результ',
            title: ''
          },
          'i-i-s-proba19-вакант-должн-l': {
            caption: 'Вакант должн',
            title: ''
          },
          'i-i-s-proba19-регист-анкеты-l': {
            caption: 'Регист анкеты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-proba19-вакант-должн-l': IISProba19ВакантДолжнLForm,
    'i-i-s-proba19-граф-собес-l': IISProba19ГрафСобесLForm,
    'i-i-s-proba19-должн-сотр-l': IISProba19ДолжнСотрLForm,
    'i-i-s-proba19-организация-l': IISProba19ОрганизацияLForm,
    'i-i-s-proba19-планир-собес-l': IISProba19ПланирСобесLForm,
    'i-i-s-proba19-рег-результ-l': IISProba19РегРезультLForm,
    'i-i-s-proba19-регист-анкеты-l': IISProba19РегистАнкетыLForm,
    'i-i-s-proba19-сотрудники-l': IISProba19СотрудникиLForm,
    'i-i-s-proba19-вакант-должн-e': IISProba19ВакантДолжнEForm,
    'i-i-s-proba19-граф-собес-e': IISProba19ГрафСобесEForm,
    'i-i-s-proba19-должн-сотр-e': IISProba19ДолжнСотрEForm,
    'i-i-s-proba19-организация-e': IISProba19ОрганизацияEForm,
    'i-i-s-proba19-планир-собес-e': IISProba19ПланирСобесEForm,
    'i-i-s-proba19-рег-результ-e': IISProba19РегРезультEForm,
    'i-i-s-proba19-регист-анкеты-e': IISProba19РегистАнкетыEForm,
    'i-i-s-proba19-сотрудники-e': IISProba19СотрудникиEForm
  },

});

export default translations;
