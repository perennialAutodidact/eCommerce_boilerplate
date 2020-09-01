from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.middleware.csrf import get_token

@api_view(['GET'])
def csrf_token(request):
    '''Return a CSRF token'''

    print(request.data)

    data = {
        "token":get_token(request)
    }
    return Response(data=data)