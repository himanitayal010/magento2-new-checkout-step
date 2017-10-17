<?php
use Magento\Framework\Component\ComponentRegistrar;

$registrar = new ComponentRegistrar();
if ($registrar->getPath(ComponentRegistrar::MODULE, 'Excellence_GiftWrap') === null) {
    ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Excellence_GiftWrap', __DIR__);
}
