print("="*70)
print("Questão 1: Calcular a soma dos primeiros 13 números inteiros positivos.")
print("="*70)

# Código para calcular a soma dos primeiros 13 números inteiros positivos
INDICE = 13
SOMA = 0
K = 0

while K < INDICE:
    K = K + 1
    SOMA = SOMA + K

print("A soma dos primeiros 13 números inteiros positivos é:", SOMA)
# ========================================================================================
print('\n'*2)
print("="*70)
print("Questão 2: Verificar se um número pertence à sequência de Fibonacci.")
print("="*70)

def is_fibonacci(number):
    a, b = 0, 1
    while a <= number:
        if a == number:
            return True
        a, b = b, a + b
    return False

# Solicitar ao usuário um número
numero = int(input("Digite um número para verificar se pertence à sequência de Fibonacci: "))

# Verificar se o número pertence à sequência de Fibonacci e exibir uma mensagem apropriada
if is_fibonacci(numero):
    print(numero, "pertence à sequência de Fibonacci.")
else:
    print(numero, "não pertence à sequência de Fibonacci.")

# ========================================================================================
print('\n'*2)
print("="*70)
print("Questão 3: Descubra a lógica e complete o próximo elemento.")
print("="*70)

# Sequências a serem completadas
sequences = {
    'a': [1, 3, 5, 7],
    'b': [2, 4, 8, 16, 32, 64],
    'c': [0, 1, 4, 9, 16, 25, 36],
    'd': [4, 16, 36, 64],
    'e': [1, 1, 2, 3, 5, 8],
    'f': [2, 10, 12, 16, 17, 18, 19]
}

# Respostas corretas
respostas_corretas = {
    'a': 9,
    'b': 128,
    'c': 49,
    'd': 100,
    'e': 13,
    'f': 200
}

# Função para descobrir a lógica e completar a sequência
def complete_sequence(sequence):
    if len(sequence) <= 1:
        return "Não é possível completar a sequência."

    difference = sequence[1] - sequence[0]

    for i in range(1, len(sequence)):
        if sequence[i] - sequence[i-1] != difference:
            return "Não é possível completar a sequência."

    return sequence[-1] + difference

# Perguntar ao usuário e verificar as respostas
for key, value in sequences.items():
    resposta_usuario = int(input(f"Complete a sequência {value}: "))
    if resposta_usuario == respostas_corretas[key]:
        print("Acertou!")
    else:
        print(f"Errado. A resposta correta é {respostas_corretas[key]}.")

# ========================================================================================
print('\n'*2)
print("="*70)
print("Questão 4: Descubra a solução do problema dos interruptores.")
print("="*70)

pergunta = """Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente.
Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser.
Seu objetivo é descobrir qual interruptor controla qual lâmpada.\n"""

resposta = """Ligue um dos interruptores e espere um pouco. Desligue e ligue um segundo interruptor.
Vá até a sala. A lâmpada desligada e quente corresponde ao primeiro interruptor, a lâmpada acesa ao segundo e a lâmpada apagada e fria ao terceiro.\n"""

while True:
    mostrar_resposta = input(f"{pergunta} Deseja ver a resposta? (sim/não): ")
    if mostrar_resposta.lower() == 'sim':
        print(resposta)
        break
    elif mostrar_resposta.lower() == 'não':
        continue
    else:
        print("Por favor, responda 'sim' ou 'não'.")

# ========================================================================================
print("="*70)
print("Questão 5: Inversor de String")
print("="*70)

# Solicitar ao usuário uma string
string_original = input("Por favor, digite uma string para ser invertida: ")

# Função para inverter a string
def inverter_string(string):
    string_invertida = ""
    for i in range(len(string)-1, -1, -1):
        string_invertida += string[i]
    return string_invertida

# Inverter a string e imprimir o resultado
string_invertida = inverter_string(string_original)
print("\nString original:", string_original)
print("String invertida:", string_invertida)