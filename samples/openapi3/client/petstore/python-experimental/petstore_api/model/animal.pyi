# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401


class Animal(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "className",
        }
        
        @classmethod
        @property
        def discriminator(cls):
            return {
                'className': {
                    'Cat': Cat,
                    'Dog': Dog,
                }
            }
        class properties:
            className = schemas.StrSchema
            color = schemas.StrSchema
            __annotations__ = {
                "className": className,
                "color": color,
            }
        additional_properties = schemas.AnyTypeSchema
    
    className: MetaOapg.properties.className
    color: typing.Union[MetaOapg.properties.color, schemas.Unset]
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["className"]) -> MetaOapg.properties.className: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["color"]) -> typing.Union[MetaOapg.properties.color, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def __getitem__(self, name: typing.Union[str, typing.Literal["className"], typing.Literal["color"], ]):
        # dict_instance[name] accessor
        if not hasattr(self.MetaOapg, 'properties') or name not in self.MetaOapg.properties.__annotations__:
            return super().__getitem__(name)
        try:
            return super().__getitem__(name)
        except KeyError:
            return schemas.unset

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        className: typing.Union[MetaOapg.properties.className, str, ],
        color: typing.Union[MetaOapg.properties.color, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'Animal':
        return super().__new__(
            cls,
            *args,
            className=className,
            color=color,
            _configuration=_configuration,
            **kwargs,
        )

from petstore_api.model.cat import Cat
from petstore_api.model.dog import Dog