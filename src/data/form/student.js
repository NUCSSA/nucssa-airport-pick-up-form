export default {
  'JsonSchema': {
    'definitions': {
      'Student': {
        'type': 'object',
        'required': [
          'name',
          'nuid',
          'degree',
          'email',
          'wechatId',
          'phone',
        ],
        'properties': {
          'name': {
            'title': '学生姓名',
            'type': 'string',
          },
          'nuid': {
            'title': 'NUID',
            'type': 'string',
            'description': '此项为您的登陆ID，请务必正确填写',
          },
          'degree': {
            'title': '就读项目',
            'type': 'string',
            'enum': [
              '本科',
              '硕士',
              '博士',
              'Pathway语言预科',
              'CPS本科',
              'CPS硕士',
              '访问学者',
            ],
          },
          'email': {
            'title': 'email',
            'type': 'string',
            'format': 'email',
          },
          'wechatId': {
            'title': '微信ID',
            'type': 'string',
            'description': '注意，不是昵称',
          },
          'phone': {
            'title': '电话',
            'type': 'string',
            'description': '国内电话请加86',
          },
        },
      },
    },
    'title': '乘客报名表',
    'description': '乘客必须为NEU新生',
    'type': 'object',
    'required': [
      'arrivingTime',
      'flightNumber',
      'address',
      'luggageNumber',
    ],
    'properties': {
      'studentSet': {
        'title': '乘客(学生)列表',
        'description': '有几名乘客填写几份信息，最多3人',
        'type': 'array',
        'minItems': 1,
        'maxItems': 3,
        'items': {
          '$ref': '#/definitions/Student',
        },
      },
      'arrivingTime': {
        'title': '到达时间',
        'type': 'string',
        'description': '例如 2018/08/27 7:44am',
      },
      'flightNumber': {
        'title': '航班号',
        'type': 'string',
        'description': '例如 HU481',
      },
      'address': {
        'title': '目的地地址',
        'type': 'string',
        'description': '例如 460 Parker st, 02115',
      },
      'luggageNumber': {
        'title': '行李箱总数量',
        'type': 'string',
      },
      'remark': {
        'title': '备注',
        'type': 'string',
      },
    },
  },
  'UISchema': {
    'StudentSet': {
      'ui:options': {
        'orderable': false,
      },
    },
    'remark': {
      'ui:widget': 'textarea',
    },
  },
}
