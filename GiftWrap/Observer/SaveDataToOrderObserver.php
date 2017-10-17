<?php
namespace Excellence\Giftwrap\Observer;

use Magento\Framework\Event\Observer as EventObserver;
use Magento\Framework\Event\ObserverInterface;

class SaveDataToOrderObserver implements ObserverInterface
{
    protected $_checkoutSession;

    public function __construct(
        \Magento\Checkout\Model\Session $checkoutSession,
        \Magento\Framework\App\RequestInterface $request
    ) {
        $this->_checkoutSession = $checkoutSession;
        $this->_request = $request;
    }

    public function execute(\Magento\Framework\Event\Observer $observer)
    {   
        $giftData = $this->_request->getPost();
        $model = $observer->getOrder();
        $model->setGiftWrap($giftData['gift_wrap'])->save();
        $quote = $observer->getQuote();
        $quote->setGiftWrap($giftData['gift_wrap'])->save();
        return $this;
    }
}