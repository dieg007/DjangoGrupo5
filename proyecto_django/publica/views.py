from django.shortcuts import render

from django.http import HttpResponse


# Create your views here.

def index(request):
    if (request.GET.get('param')):
        param_uno = request.GET.get('param')
    else:
        param_uno ='defecto'
    param_dos = request.GET.get('param2')
    return render(request,'publica/index.html',
                {'param_uno':param_uno,
                 'param_dos':param_dos})